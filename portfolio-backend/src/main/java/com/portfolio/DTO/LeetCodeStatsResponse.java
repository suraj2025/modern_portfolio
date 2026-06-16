package com.portfolio.DTO;


import lombok.Data;

import java.util.List;

@Data
public class LeetCodeStatsResponse {

    private int totalSolved;
    private int easy;
    private int medium;
    private int hard;

    private int streak;
    private int activeDays;

    private List<RecentSubmission> recentSubmissions;
}
