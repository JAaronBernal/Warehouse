Feature: Containers

  Scenario Outline: Success on Warehouse
    Given the user in the Warehouse page in "<environment>" selected 
    When the user select the "<station>" to work
    Then the user works in containers with "<layout>" "<numContainer>" "<TransferPack>" "<fingerID>" "<orderID>" "<secondOrderID>"

    Examples: 
      |environment | station|layout         |numContainer|TransferPack|fingerID|orderID    |secondOrderID|
      |Test        | MX4    |Layout-MX4.csv | 2          | 2          |TAE     |3004415978|3412391569   |