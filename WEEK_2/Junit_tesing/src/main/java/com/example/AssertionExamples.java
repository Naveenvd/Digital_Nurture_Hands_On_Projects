package com.example;

public class AssertionExamples {

    public static void main(String[] args) {
        System.out.println("Manual assertion demonstrations:");

        // Manual equivalents of assertions
        System.out.println("assertEquals: " + (2 + 3 == 5));
        System.out.println("assertTrue: " + (5 > 3));
        System.out.println("assertFalse: " + (5 < 3));
        System.out.println("assertNull: " + (getNull() == null));
        System.out.println("assertNotNull: " + (getNotNull() != null));
    }

    public static Object getNull() {
        return null;
    }

    public static Object getNotNull() {
        return new Object();
    }
}
