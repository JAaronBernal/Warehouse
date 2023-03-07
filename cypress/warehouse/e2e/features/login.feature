Feature: Login

  Scenario Outline: Successs Login
    Given A user open Self Services web page "<organization>"
    When the user login with valid credentials "<userName>" "<password>"
    Then user should see home page

    Examples: 
      |organization| userName                   | password      |
      |Prod        | rosa.salinas@99minutos.com | 99Minutos.com |
