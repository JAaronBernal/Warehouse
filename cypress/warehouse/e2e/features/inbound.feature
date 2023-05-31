Feature: Inbound

  Scenario Outline: Success on Inbound
    Given A user open the inbound page in "<environment>" selected 
    When the user must be at the selected "<station>" to use inbound
    Then user should use inbound with "<emailVeloz>" "<nameVeloz>" "<kindOfDriver>" "<providerName>" "<vehicleType>" "<vehiclePlates>" "<driverReasonNoQR>" "<packageAmount>" "<userActivity>" "<stationOrigin>"

    Examples: 
      |environment | station |emailVeloz         |nameVeloz  |kindOfDriver|providerName|vehicleType|vehiclePlates|driverReasonNoQR|packageAmount|userActivity|stationOrigin|
      |Test        | MX1     |TEMPORAL0@mail.com |Aaron      |99 Minutos  |QA Pruebas  |Sedán      |PDT-2464     | No aplica      | 5           |Recolección |MX1          |
