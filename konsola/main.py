#!/bin/python

class Osoba:
    classCounter: int = 0

    def __init__(self, id: int = 0, name: str = "") -> None:
        Osoba.classCounter += 1
        self.__id: int = id
        self.__name: str = name

    def greet(self, name: str) -> None:
        if self.__name == "":
            print("Brak danych")
        else: 
            print(f"Cześć {name}, mam na imię {self.__name}")

    def copyObject(self, obj):
        self.__id  = obj.__id
        self.__name = obj.__name

# Start
print("Test aplikacji forum użytkowników")

print(f"Liczba zarejestrowanych osób to {Osoba.classCounter}")

per1 = Osoba()

print("Podaj dane do obiektu")
id
while True:
    id = input("ID: ")
    try:
        id = int(id)
    except: 
        continue
    break
name = input("Imię: ")
per2 = Osoba(id, name)

per3 = Osoba()
per3.copyObject(per2)

per1.greet("Jan")
per2.greet("Jan")
per3.greet("Jan")

print(f"Liczba zarejestrowanych osób to {Osoba.classCounter}")
