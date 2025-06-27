package com.example;

public class AnalyticsService {

    private final ExternalApi api;

    public AnalyticsService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
