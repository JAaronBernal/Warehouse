Feature: Login

  Scenario Outline: Successs Login
    Given user open 3Clics web page "<enviroment>" "<userName>" "<password>"
    When the user enters shipments and adds the data of "<recolecction>" "<typerecolecction>" "<referenceRecolecction>" "<referenceDelivery>" "<delivery>" "<packageSize>" "<shipmentType>"
    Then the user adding receiving person data "<nameReceiver>" "<phoneNumber>" "<email>" "<cod>" "<codValue>"
    Then the user select additional Services "<ecoGuia>" "<assurance>" "<valueAssurence>"  


    Examples: 
      |enviroment       | userName                   | password      | recolecction                                         | typerecolecction| referenceRecolecction    | referenceDelivery    | delivery                                                         |packageSize|shipmentType|nameReceiver            |phoneNumber  |email                     |cod|codValue|ecoGuia|assurance|valueAssurence|
      |SelfSandbox      |mmhpruebas40@gmail.com      | 99Minutos.com | Calle 6 143, Nezahualcoyotl, 57420                   | Punto99         |Referencia de recolección |Referencia de Entrega |Av Dos Arbolitos 253, Benito Juárez, 57000 Nezahualcóyotl, Méx.   | S         |Next Day    |Jesus Aaron Bernal Lopez|525623613748 |jesus.bernal@99minutos.com|si |10000   |no     |si       |15000         |

