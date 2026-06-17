package com.portfolio.controller;

import lombok.RequiredArgsConstructor;

import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.portfolio.DTO.LeetCodeStatsResponse;
import com.portfolio.Service.LeetCodeService;

@RestController
@RequestMapping("/api/leetcode")
@RequiredArgsConstructor
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://modern-portfolio-gamma-liart.vercel.app/"
})
public class LeetCodeController {

    private final LeetCodeService service;

    @GetMapping("/stats")
    public LeetCodeStatsResponse getStats()
            throws Exception {

        return service.getStats("suraj025");
    }

    @GetMapping("/weekly")
    public ResponseEntity<?> getWeeklyActivity() {
        String query = """
                    {
                      "query": "{ matchedUser(username: \\"suraj025\\") { userCalendar { submissionCalendar } } }"
                    }
                """;

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<>(query, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Map> response = restTemplate.postForEntity(
                "https://leetcode.com/graphql", entity, Map.class);

        // submissionCalendar is a JSON string like {"1234567890": 3, ...}
        // unix timestamp -> count
        Map data = (Map) ((Map) ((Map) response.getBody().get("data")).get("matchedUser")).get("userCalendar");
        String calendarJson = (String) data.get("submissionCalendar");

        return ResponseEntity.ok(Map.of("calendar", calendarJson));
    }
}
