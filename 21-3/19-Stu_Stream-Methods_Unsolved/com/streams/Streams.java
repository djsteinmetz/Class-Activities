package com.streams;

import java.util.Arrays;

import java.util.ArrayList;

import java.util.stream.Stream;

import java.util.Scanner;

class Streams {

  // Remember, you create a Scanner with new Scanner(System.in).
  
  private static void _helloDoctors (final String... names) {
    stream(names)
      .forEach((String name) -> {
        System.out.println(String.format("Hello %s!", name));
      });
    stream(names)
      .filter(string -> !string.startsWith("A"))
      .map(name -> "Dr. " + name)
      .forEach(System.out::println);
  }

}
