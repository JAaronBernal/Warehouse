Feature: envios

  Scenario Outline: Make a shipment
    Given A user login in Self-Services web page with credentials "<environment>" "<userName>" "<password>"
    When the user make shipment introducing "<shippingType>" "<locationRecollect>" "<typeOfHousing>" "<reference>" "<shippingWeight>" "<schedule>" "<nameThatRecollect>" "<phoneThatRecollect>" "<emailThatRecollect>" "<locationReceives>" "<typeOfHousingReceives>" "<nameThatReceives>" "<phoneThatReceives>" "<emailThatReceives>" "<referenceReceives>"
    Then the user print the shipping guide

    Examples: 
      |environment | userName                     | password      | shippingType | locationRecollect                                                      | typeOfHousing | reference      | shippingWeight | schedule              | nameThatRecollect | phoneThatRecollect | emailThatRecollect   | locationReceives                                                                  | typeOfHousingReceives | nameThatReceives | phoneThatReceives | emailThatReceives          | referenceReceives |
      |Test        | mmhpruebas40@gmail.com       | 99Minutos.com | Next day     | Calle 6 num 143 col Nezahualcoyotl Estado de Mexico                    | Residencial   | Guía de prueba | Menos de 1 kg  | Lo mas pronto posible | Pruebas QA        |         5633561865 | jess_arn18@gmail.com | Calle 5 , José López Portillo, 09920 Ciudad de México, CDMX, México               | Residencial           | Pruebas QA       |          57562877 | jesus.bernal@99minutos.com | Guía para pruebas |
