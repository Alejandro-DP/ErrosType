using System;

namespace SerieTaylor
{
    class Program
    {
        static void Main(string[] args)
        {
            int n;
            double x, taylor;

            Console.Write("¿Cuántos terminos desea?" + "\n");
            n = Convert.ToInt32(Console.ReadLine());
            Console.Write("Ingrese el valor de x: ");
            x = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("F(x) = {0}", Taylor(x, n));
            Console.ReadKey();
        }

        private static double Taylor(double x, int n)
        {
            double t, s = 0;
            for (int i = 0; i < n; i++)

            {
                t = Math.Pow(x, i) / Factorial(i);
                //Console.WriteLine("T({0}) = {1}", i, t);
                s += t;
            }

            return s;
        }

        private static double Factorial(int n)
        {
            double fac = 1;
            for (int i = 2; i <= n; i++)
            {
                fac *= i;
            }

            return fac;
        }
    }
}