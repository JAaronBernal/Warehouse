Feature: Cancel List

  Scenario Outline: cancel List
    Given The user login in SelfService "<organization>" "<userName>" "<password>"
    When The user does a cancel with a list

    Examples: 
      |organization   | userName                        | password      |
      |Test           | mmhpruebas40@gmail.com          | 99Minutos.com |
      
      