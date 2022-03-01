# OOP Orientado a testes e S.O.L.I.D (durinho)

## ESQUEÇAM A POHA DA CLASSE (ORIENTAÇÃO A OBJETO)
### Um paradigma que visa transformar em código, INTERAÇÃO ENTRE OBJETOS DO MUNDO REAL

* Single Responsibility Principle
* Open Close Principle
* Liskov Substitution Principle
* Interface segregation Principle
* Dependency inversion Principle

```java
interface Walkable{
  andar();
}

class Ator implements Walkable{
  andar();
}
class Personagem extends Ator{
  ...
}
class Monstro extends Ator{
  ...
}
class Carro implements Walkable {}
```

Testes Unitários
Testes de Integração
Testes funcionais

```java
interface Database{
  Map<String, String> query();
}

class MysqlDatabase implements Database{
  Map<String, String> query(){
    ...
  }
  ...
}

class PostgresDatabase implements Database{
  Map<String, String> query(){
    ...
  }
  ...
}

class FakeDatabase implements Database{
  Map<String, String> query(){
    ...
  }
  ...
}

class UserService {
  Database bd;
  public UserService(Database bd){
    this.bd = bd;
  }

  User cadastrar(){
    const user = bd.query("INSERT INTO users values (?)", []);
    return user;
  }
  boolean deletar(String id){
    try {
        bd.query("DELETE from users where id = ?", [id]);
        return true;
    } catch(IOException error){
        return false;
    }
  }
}
```


### PBL (PROBLEMS BASED LEARNING)
Escrever uma aplicação BOT para o discord
* bot de rpg de texto


# Gerenciadores de Pacotes
* NPM (NODE PACKAGE MANAGER)

------
## PHP
* Autoload