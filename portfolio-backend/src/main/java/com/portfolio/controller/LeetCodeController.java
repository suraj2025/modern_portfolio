package com.portfolio.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import com.portfolio.DTO.LeetCodeStatsResponse;
import com.portfolio.Service.LeetCodeService;

@RestController
@RequestMapping("/api/leetcode")
@RequiredArgsConstructor
@CrossOrigin(
    origins = {
        "http://localhost:5173",
        "https://modern-portfolio-gamma-liart.vercel.app/"
    }
)
public class LeetCodeController {

    private final LeetCodeService service;

    @GetMapping("/stats")
    public LeetCodeStatsResponse getStats()
            throws Exception {

        return service.getStats("suraj025");
    }
}
