public class Singleton
{
    public static void main(String[] args)
    {
        Logger log1=Logger.getInstance();
        Logger log2=Logger.getInstance();
        if(log1==log2)
        {
            System.out.println("Singleton works");
            System.out.println("Both are same Instance");
        }
        else {
            System.out.println("Singleton fails");
            System.out.println("Both are different Instances");
        }

    }
}
