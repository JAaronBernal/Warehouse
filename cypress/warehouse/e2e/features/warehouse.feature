Feature: Warehouse

  Scenario Outline: Success on Warehouse
    Given A user open the Warehouse page in "<environment>" selected 
    When the user select the "<station>"
    Then the user synchronizes the "<layout>" "<numContainer>" "<TransferPack>" "<fingerID>" "<ordeID>" "<secondOrderID>" "<lineHaul>" "<newNameLineHaul>" "<driver>" "<idVehicle>" "<destination>" "<destination2>" "<DepTime>" "<reEditName>" "<reEditIdVehicle>" "<reDest1>" "<reEditDriver>"

    Examples: 
      |environment | station|layout         |numContainer|TransferPack|fingerID|ordeID    |secondOrderID|lineHaul|newNameLineHaul|driver       |idVehicle|destination|destination2|depTime            |reEditName|reEditIdVehicle|reDest1|reEditDriver|
      |Test        | MX4    |Layout-MX4.csv | 1          | NA          |TAE    |3919656385|3412391569   |QA      |TAE            |Alexis Pat   |PDT2434  |MX5        |MX4         |2023-04-17T16:00:00|QAR       |LUF2997        |MX4    |Alexis Pat  |