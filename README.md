# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser  possível listar todas as categorias.

**RN**
Não deve ser possível cadastrar um carro com a placa existente.
O carro deve ser cadastrado, por padrão, com disponibilidade.
O carro só pode ser cadastrado por um administrador.


# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis
Deve ser possível listar todos os carros disponíveis pelo nome da categoria
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponíveis pelo nome do carro

**RN**
O usuário não precisar estar logado no sistema.

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O carro só pode ser cadastrado por um administrador.


#  Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um administrador.


# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel

**RNF**

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
Ao realizar um aluguel, o status do carro devera ser alterado para indisponivel.
O usuário deve estar logado na aplicação.


# Devolução de Carro

**RF**
Deve ser possível realizar a devolução de um carro.

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado a diária completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o valor total do aluguel.
Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somada ao total do aluguel.
O usuário deve estar logado na aplicação.


# Listagem de Alugueis 

**RF**
Deve ser possível realizar a busca de todos os alugueis para o usuário.

**RN**
O usuário deve estar logado na aplicação.


# Recuperar Senha

**RF**
Deve ser possível que o usuário recupere a senha informando o e-mail.
O usuário deve receber um e-mail com o passo a passo para recuperação da senha.
O usuário deve conseguir inserir uma nova senha.

**RN**
O usuário precisa informar uma nova senha.
O link enviado para a recuperação deve expirar em 3 horas.