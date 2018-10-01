package com.exceptions;
import static com.exceptions.Polygon.InsufficientVerticesException;
import static com.exceptions.Polygon.InvalidSideLengthException;

class Test {

 public static void main (String args[]) {
   // Your code here.

        try {
          Polygon rectangle = new Polygon (2, 0);
           System.out.println(rectangle.area());
        }

        catch (Polygon.InsufficientVerticesException e) {
           e.printStackTrace();
        }
        catch (Polygon.InvalidSideLengthException e) {
         e.printStackTrace();      }
  }
 }