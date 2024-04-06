Dado('chamar o endpoint enumerations') do
  @response = ApiWeb.get_enumerations
end

Então('validar o retorno do endpoint com os') do
  expect(@response.code).to eq 200
  expect(@response).to have_key('typeOfEstablishment')
  STDOUT.puts @response['typeOfEstablishment'].sample.to_s.colorize(:blue)
end
