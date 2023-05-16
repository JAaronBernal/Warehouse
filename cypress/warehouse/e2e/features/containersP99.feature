Feature: Containers

  Scenario Outline: Success on Warehouse
    Given the user in the Warehouse page in "<environment>" 
    When User select the "<station>" to work
    Then the user works in containersP99 with "<layout>" "<numContainer>" "<fingerID>" 

    Examples: 
      |environment | station|layout         |numContainer|fingerID   |
      |Test        | MX1    |Layout-MX1.csv | 1          |TAE        |
      |Test        | MX1    |Layout-MX1.csv | 1          |P99TAE     |
      

      