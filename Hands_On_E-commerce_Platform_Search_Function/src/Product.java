import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Product
{
    int productId;
    String productName;
    String category;
    public  Product(int id,String name,String category)
    {
         this.productId=id;
         this.productName=name;
         this.category=category;
    }
    public String toString()
    {
        return "product={productId = "+productId+",productName="+productName+",category="+category+"}";
    }

}
class Ecommerse_Seach
{
    public static Product linear_search(Product[] obj,String target )
    {
        System.out.println("Implementing the Linear Search");
        for(Product p:obj)
        {
            if(p.productName.equalsIgnoreCase(target))
            {
                return p ;
            }
        }
        return null;
    }
    public  static Product binary_search(Product[] obj,String target)
    {
        System.out.println("Implementing the binary search");
        Arrays.sort(obj, Comparator.comparing(p->p.productName.toLowerCase()));
        int left = 0, right = obj.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = obj[mid].productName.compareToIgnoreCase(target);
            if (cmp == 0)
            {
                return obj[mid];
            }
            if (cmp < 0)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }
        return null;

    }
    public static void main(String[] args)
    {
        Scanner in=new Scanner(System.in);
        System.out.println("enter the number of elements");
        int n=in.nextInt();
        Product[] obj=new Product[n];
        for(int i=0;i<n;i++)
        {
            System.out.println("Enter the element: "+(i+1));

            System.out.println("Enter the product id");
            int id=in.nextInt();
            in.nextLine();
            System.out.println("Enter the product name");
            String name=in.nextLine();

            System.out.println("Enter the category of the product");

            String category=in.nextLine();
            obj[i]=new Product(id,name,category);
        }
        System.out.println("enter the product name which you want to be search");
        String target=in.nextLine();
        Product linearSearch=linear_search(obj,target);
        if(linearSearch!=null)
        {
            System.out.println("product found Using Linear Search:"+linearSearch);
        }
        Product binarySearch=binary_search(obj,target);
        if(binarySearch!=null)
        {
            System.out.println("product found Using Binary Search:"+binarySearch);
        }


    }
}
