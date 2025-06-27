package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class MathUtilsTest {

    private MathUtils mathUtils;

    @Before
    public void setUp() {

        mathUtils = new MathUtils();
        System.out.println("Setup: MathUtils object created");
    }

    @After
    public void tearDown() {

        System.out.println("Teardown: Test completed\n");
    }

    @Test
    public void testMultiply() {

        int a = 4;
        int b = 5;
        int result = mathUtils.multiply(a, b);
        assertEquals(20, result);
    }

    @Test
    public void testDivide() {

        int a = 10;
        int b = 2;
        int result = mathUtils.divide(a, b);
        assertEquals(5, result);
    }

    @Test
    public void testDivideByZero() {
        int a = 10;
        int b = 0;
        int result = mathUtils.divide(a, b);
        assertEquals(0, result);
    }
}
