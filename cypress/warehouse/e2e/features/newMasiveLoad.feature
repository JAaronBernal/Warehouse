Feature: New Masisive Load

  Scenario Outline: New Massive Load
    Given A user login in massive front with credentials "<organization>" "<userName>" "<password>"
    When The user does a masive loads
    Then user should upload the file "<numOrders>"

    Examples: 
      |organization        | userName                       | password      |numOrders   |
      |Massive Load Sandbox| mmhpruebas40@gmail.com       | 99Minutos.com |09guias.xlsx|