Feature: Warehouse

  Scenario Outline: Success on Warehouse
    Given A user open the Warehouse page in "<environment>" selected 
    When the user select the "<station>"
    Then the user synchronizes the "<layout>" "<numContainer>" "<TransferPack>" "<fingerID>" "<ordeID>" "<secondOrderID>" "<lineHaul>" "<newNameLineHaul>" "<driver>" "<idVehicle>" "<destination>" "<destination2>" "<DepTime>"

    Examples: 
      |environment | station|layout         |numContainer|TransferPack|fingerID|ordeID    |secondOrderID|lineHaul|newNameLineHaul|driver       |idVehicle|destination|destination2|depTime            |
      |Test        | MX4    |Layout-MX4.csv | 2          | 2          |TAE     |2257102278|1737270874   |QA      |TAE            |Alexis Pat   |PDT2434  |MX5        |MX4         |2023-04-10T16:00:00|