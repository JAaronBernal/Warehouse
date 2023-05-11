Feature: Containers

  Scenario Outline: Success on Warehouse
    Given the user in the Warehouse page in "<environment>" 
    When User select the "<station>" to work
    Then the user works in containersP99 with "<layout>" "<numContainer>" "<TransferPack>" "<fingerID>" 

    Examples: 
      |environment | station|layout         |numContainer|TransferPack|fingerID       |
      |Test        | MX1    |Layout-MX1.csv | 1          | NA         |P99TAE         |

      