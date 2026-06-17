package com.portfolio.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/github")
@RequiredArgsConstructor
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://modern-portfolio-gamma-liart.vercel.app/"
})
public class GithubController {
    @Value("${github.token}")
    private String githubToken;

    @Value("${github.username}")
    private String githubUsername;

    @GetMapping("/contributions")
    public ResponseEntity<?> getContributions() {
        String query = "{\"query\":\"{ user(login: \\\"" + githubUsername
                + "\\\") { contributionsCollection { contributionCalendar { totalContributions weeks { contributionDays { date contributionCount } } } } } }\"}";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(githubToken);
        HttpEntity<String> entity = new HttpEntity<>(query, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Map> response = restTemplate.postForEntity(
                "https://api.github.com/graphql",
                entity,
                Map.class);

        return ResponseEntity.ok(response.getBody());
    }
}
