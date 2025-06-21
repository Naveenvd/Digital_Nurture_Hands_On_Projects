import java.util.*;
public class Financial_Forcast
{
    public static double futureValueRecursive(double presentValue, double growthRate, int years)
    {
        if (years == 0) {
            return presentValue;
        }
        return futureValueRecursive(presentValue, growthRate, years - 1) * (1 + growthRate);
    }
    public static double futureValueIterative(double presentValue, double growthRate, int years) {
        for (int i = 0; i < years; i++) {
            presentValue *= (1 + growthRate);
        }
        return presentValue;
    }
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);


        System.out.print("Enter the present value : ");
        double presentValue = in.nextDouble();

        System.out.print("Enter the annual growth rate: ");
        double growthRate = in.nextDouble();

        System.out.print("Enter the number of years: ");
        int years = in.nextInt();


        double resultRecursive = futureValueRecursive(presentValue, growthRate, years);
        System.out.println("Using Recursive Method");
        System.out.printf("Future value  after %d years: %.2f%n", years, resultRecursive);





    }
}
