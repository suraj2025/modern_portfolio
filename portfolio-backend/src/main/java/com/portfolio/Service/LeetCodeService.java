package com.portfolio.Service;



import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.portfolio.DTO.LeetCodeStatsResponse;
import com.portfolio.DTO.RecentSubmission;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.util.*;

@Service
public class LeetCodeService {

    private final RestTemplate restTemplate = new RestTemplate();

    public LeetCodeStatsResponse getStats(String username) throws Exception {

        String query = """
            query profile($username: String!) {
              matchedUser(username: $username) {
                submitStatsGlobal {
                  acSubmissionNum {
                    difficulty
                    count
                  }
                }
                userCalendar {
                  streak
                  totalActiveDays
                }
              }
              recentAcSubmissionList(
                username: $username,
                limit: 5
              ) {
                title
                titleSlug
                timestamp
              }
            }
            """;

        Map<String, Object> request = new HashMap<>();
        request.put("query", query);
        request.put("variables",
                Map.of("username", username));

        ObjectMapper mapper = new ObjectMapper();

        String response =
                restTemplate.postForObject(
                        "https://leetcode.com/graphql",
                        request,
                        String.class
                );

        JsonNode root = mapper.readTree(response);

        JsonNode user =
                root.path("data")
                    .path("matchedUser");

        LeetCodeStatsResponse stats =
                new LeetCodeStatsResponse();

        for (JsonNode node :
                user.path("submitStatsGlobal")
                    .path("acSubmissionNum")) {

            String difficulty =
                    node.path("difficulty").asText();

            int count =
                    node.path("count").asInt();

            switch (difficulty) {
                case "All" -> stats.setTotalSolved(count);
                case "Easy" -> stats.setEasy(count);
                case "Medium" -> stats.setMedium(count);
                case "Hard" -> stats.setHard(count);
            }
        }

        stats.setStreak(
                user.path("userCalendar")
                        .path("streak")
                        .asInt());

        stats.setActiveDays(
                user.path("userCalendar")
                        .path("totalActiveDays")
                        .asInt());

        List<RecentSubmission> recent =
                new ArrayList<>();

        JsonNode submissions =
                root.path("data")
                    .path("recentAcSubmissionList");

        for (JsonNode node : submissions) {

            RecentSubmission submission =
                    new RecentSubmission();

            submission.setTitle(
                    node.path("title").asText());

            submission.setTitleSlug(
                    node.path("titleSlug").asText());

            submission.setTimestamp(
                    node.path("timestamp").asText());

            recent.add(submission);
        }

        stats.setRecentSubmissions(recent);

        return stats;
    }
}