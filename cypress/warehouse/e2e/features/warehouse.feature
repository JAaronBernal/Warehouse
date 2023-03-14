Feature: Warehouse

  Scenario Outline: Success on Warehouse
    Given A user open the Warehouse page in "<environment>" selected 
    When the user select the "<station>"
    Then the user synchronizes the "<fingerId>"

    Examples: 
      |environment | station|fingerId|
      |Test        | MX5    |1863372085|