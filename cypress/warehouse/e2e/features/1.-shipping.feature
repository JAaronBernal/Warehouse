Feature: envios

  Scenario Outline: Make a shipment
    Given A user login in Self-Services web page with credentials "<organization>" "<userName>" "<password>"
    When the user make shipment introducing "<shippingType>" "<locationRecollect>" "<typeOfHousing>" "<reference>" "<shippingWeight>" "<schedule>" "<nameThatRecollect>" "<phoneThatRecollect>" "<emailThatRecollect>" "<locationReceives>" "<typeOfHousingReceives>" "<nameThatReceives>" "<phoneThatReceives>" "<emailThatReceives>" "<referenceReceives>" "<cod>"
    Then the user print the shipping guide

    Examples: 
      |organization| userName                     | password      | shippingType | locationRecollect                                                      | typeOfHousing | reference      | shippingWeight | schedule              | nameThatRecollect | phoneThatRecollect | emailThatRecollect   | locationReceives                                                                       | typeOfHousingReceives | nameThatReceives | phoneThatReceives | emailThatReceives          | referenceReceives |cod     |
      |Test        | mmhpruebas40@gmail.com       | 99Minutos.com | Next day     | calle 6 num 145 col nezahualcoyotl 57420                               | Residencial   | Guía de prueba | De 2 a 3 kg    | Lo mas pronto posible | Pruebas QA        |         5633561865 | jess_arn18@gmail.com | Spencer 331-325, Polanco, Polanco V Secc, Miguel Hidalgo, 11560 Ciudad de México, CDMX | Residencial           | Pruebas QA       |          57562877 | jesus.bernal@99minutos.com | Guía para pruebas |NA      |