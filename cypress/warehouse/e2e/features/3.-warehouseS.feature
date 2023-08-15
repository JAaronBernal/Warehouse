Feature: Warehouse

  Scenario Outline: Success on Warehouse S
    Given A user open the Warehouse page in "<environment>" selected 
    When the user select the "<station>"
    Then the user synchronizes this "<environment>" "<numContainer>" "<fingerID>" "<lineHaul>" "<driver>" "<idVehicle>" "<destination>"

    Examples: 
      |environment | station|numContainer|fingerID   |lineHaul |driver                         |idVehicle|destination|
      |E2ETest     | MX5    | 1          |QAA        | QA      |lendaly.flores3@99minutos.com  |PDT2434  |MX5        |



    

