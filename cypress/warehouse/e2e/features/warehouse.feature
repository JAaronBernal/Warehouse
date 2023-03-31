Feature: Warehouse

  Scenario Outline: Success on Warehouse
    Given A user open the Warehouse page in "<environment>" selected 
    When the user select the "<station>"
    Then the user synchronizes the "<layout>" "<numContainer>" "<fingerID>" "<lineHaul>" "<newNameLineHaul>" "<driver>" "<idVehicle>" "<destination>" "<DepTime>"

    Examples: 
      |environment | station|layout         |numContainer|fingerID|lineHaul|newNameLineHaul|driver      |idVehicle|destination|depTime|
      |Test        | MX5    |Layout-MX5.csv | 1          |TAE     |QA2      |TAE            |Don Veloz   |PDT2434  |MX1        |27/03/2023|