class ApiWeb
  # Classe que fornece métodos para interagir com API web.
  include HTTParty
  base_uri 'https://portal.vr.com.br/api-web'
  format :json
  headers 'Content-Type': 'application/json'
  default_options.update(verify: false)

  def self.get_enumerations
    get('/comum/enumerations/VRPAT')
  end
end
