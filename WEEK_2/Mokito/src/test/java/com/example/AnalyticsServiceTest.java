package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class AnalyticsServiceTest
{

    @Test
    public void testVerifyInteraction()
    {

        ExternalApi mockApi = mock(ExternalApi.class);
        AnalyticsService service = new AnalyticsService(mockApi);


        service.fetchData();
        verify(mockApi).getData();
    }
}
