Feature: Cancel List

  Scenario Outline: cancel List
    Given The user login in 3Clics "<enviroment>" "<userName>" "<password>"
    When The user does a cancel with a list "<enviroment>"

    Examples: 
      |enviroment       | userName                   | password      |
      |SelfSandbox      |mmhpruebas40@gmail.com      | 99Minutos.com |
      
      