Feature: Cancel Everything

  Scenario Outline: cancel Everything
    Given The user login in SelfService with credentials "<organization>" "<userName>" "<password>"
    When The user does a cancel every order with "<status>" "<mod>" "<numOfIterations>" "<numOrder>"

    Examples: 
      |organization| userName                        | password      |status          |mod            |numOfIterations |numOrder            |
      |Prod        | premexprod@99minutos.com        | 99Minutos.com |NA              |NextDay        |25               |NA                  |
      