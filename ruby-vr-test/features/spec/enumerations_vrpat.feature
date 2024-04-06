 #language:pt

@api_enumerations
Funcionalidade: Validar consultas no endpoint enumerations
API usada para consulta de informações de prudutos e estabelecimentos
Como sistema 
Quero receber requisições de consutas
Para retornar dados de produtos e estabelecimentos cadastrados

  Cenário: Validar estabelecimentos do endpoint enumerations_VRPAT
    Dado chamar o endpoint enumerations
    Então validar o retorno do endpoint com os 
    