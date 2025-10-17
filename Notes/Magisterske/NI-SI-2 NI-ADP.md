---
created: 2025-10-16T10:00:00
parent: "[[FIT]]"
---

TARGET DECK: NI-SZZ
FILE TAGS: NI-SI-2 NI-ADP

> NI-SI-2 (NI-ADP)
> Vytvářecí návrhové vzory (Abstract factory, Factory method, Builder, Prototype, Singleton) a Non-GoF návrhové vzory (Double-checked locking, Thread pool, Mock object, Null object).


START
NI-SZZ

Jaké jsou **Vytvářecí návrhové vzory**? (5)

Back:

- **Abstract factory**
- **Builder**
- **Factory method**
- **Prototype**
- **Singleton**

Tags: should-know N002F001
<!--ID: 1760705194546-->

END

---

### Abstract factory

START
NI-SZZ

K čemu slouží **Abstract factory** design pattern?

Back:

Umožňuje vytvářet rodiny souvisejících objektů bez specifikování konkrétních tříd.

![](../../../Assets/Pasted%20image%2020250130104609.png)

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re creating a furniture shop simulator. Your code consists of classes that represent:

1. A family of related products, say: `Chair` + `Sofa` + `CoffeeTable`.
2. Several variants of this family. For example, products `Chair` + `Sofa` + `CoffeeTable` are available in these variants: `Modern`, `Victorian`, `ArtDeco`.
   ![](../../../Assets/Pasted%20image%2020250130101347.png)
   You need a way to create individual furniture objects so that they match other objects of the same family. Customers get quite mad when they receive non-matching furniture.
   ![](../../../Assets/Pasted%20image%2020250130101404.png)
   Also, you don’t want to change existing code when adding new products or families of products to the program. Furniture vendors update their catalogs very often, and you wouldn’t want to change the core code each time it happens.

**SOLUTION:**
The first thing the Abstract Factory pattern suggests is to explicitly declare interfaces for each distinct product of the product family (e.g., chair, sofa or coffee table). Then you can make all variants of products follow those interfaces. For example, all chair variants can implement the `Chair` interface; all coffee table variants can implement the `CoffeeTable` interface, and so on.
![](../../../Assets/Pasted%20image%2020250130103201.png)
The next move is to declare the _Abstract Factory_—an interface with a list of creation methods for all products that are part of the product family (for example, `createChair`, `createSofa` and `createCoffeeTable`). These methods must return **abstract** product types represented by the interfaces we extracted previously: `Chair`, `Sofa`, `CoffeeTable` and so on.
![](../../../Assets/Pasted%20image%2020250130103213.png)

The client code has to work with both factories and products via their respective abstract interfaces. This lets you change the type of a factory that you pass to the client code, as well as the product variant that the client code receives, without breaking the actual client code.

Say the client wants a factory to produce a chair. The client doesn’t have to be aware of the factory’s class, nor does it matter what kind of chair it gets. Whether it’s a Modern model or a Victorian-style chair, the client must treat all chairs in the same manner, using the abstract `Chair` interface. With this approach, the only thing that the client knows about the chair is that it implements the `sitOn` method in some way. Also, whichever variant of the chair is returned, it’ll always match the type of sofa or coffee table produced by the same factory object.

There’s one more thing left to clarify: if the client is only exposed to the abstract interfaces, what creates the actual factory objects? Usually, the application creates a concrete factory object at the initialization stage. Just before that, the app must select the factory type depending on the configuration or the environment settings.

<!-- ExplanationEnd -->

Tags: should-know N002F002
<!--ID: 1760705194549-->

END

---

START
NI-SZZ

Jaká je struktura **Abstract factory** design patternu?

Back:

![](../../../Assets/Pasted%20image%2020250130101218.png)

1. **Abstract Products** declare interfaces for a set of distinct but related products which make up a product family.
2. **Concrete Products** are various implementations of abstract products, grouped by variants. Each abstract product ( chair/sofa) must be implemented in all given variants (Victorian/Modern).
3. The **Abstract Factory** interface declares a set of methods for creating each of the abstract products.
4. **Concrete Factories** implement creation methods of the abstract factory. Each concrete factory corresponds to a specific variant of products and creates only those product variants.
5. Although concrete factories instantiate concrete products, signatures of their creation methods must return corresponding *abstract* products. This way the client code that uses a factory doesn’t get coupled to the specific variant of the product it gets from a factory. The **Client** can work with any concrete factory/product variant, as long as it communicates with their objects via abstract interfaces.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250130101325.png)

<!-- ExampleEnd -->

Tags: should-know N002F003
<!--ID: 1760705194552-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Abstract factory** design patternu? (4 + 1)

Back:

✅ You can be sure that the products you’re getting from a factory are compatible with each other.
✅ You avoid tight coupling between concrete products and client code.
✅ *Single Responsibility Principle*. You can extract the product creation code into one place, making the code easier to support.
✅ *Open/Closed Principle*. You can introduce new variants of products without breaking existing client code.

❌ The code may become more complicated than it should be, since a lot of new interfaces and classes are introduced along with the pattern.

Tags: should-know N002F004
<!--ID: 1760705194555-->

END

---

### Builder

START
NI-SZZ

K čemu slouží **Builder** design pattern?

Back:

Umožňuje postupně vytvářet objekty, které mají hodně optional parametrů.

![](../../../Assets/Pasted%20image%2020250130104618.png)

<!-- ExplanationStart -->

**PROBLEM:**

Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects. Such initialization code is usually buried inside a monstrous constructor with lots of parameters. Or even worse: scattered all over the client code.

![](../../../Assets/Pasted%20image%2020250130103521.png)

For example, let’s think about how to create a `House` object. To build a simple house, you need to construct four walls and a floor, install a door, fit a pair of windows, and build a roof. But what if you want a bigger, brighter house, with a backyard and other goodies (like a heating system, plumbing, and electrical wiring)?

The simplest solution is to extend the base `House` class and create a set of subclasses to cover all combinations of the parameters. But eventually you’ll end up with a considerable number of subclasses. Any new parameter, such as the porch style, will require growing this hierarchy even more.

There’s another approach that doesn’t involve breeding subclasses. You can create a giant constructor right in the base `House` class with all possible parameters that control the house object. While this approach indeed eliminates the need for subclasses, it creates another problem.

![](../../../Assets/Pasted%20image%2020250130103533.png)

In most cases most of the parameters will be unused, making the constructor calls pretty ugly. For instance, only a fraction of houses have swimming pools, so the parameters related to swimming pools will be useless nine times out of ten.

**SOLUTION:**

The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called *builders*.

![](../../../Assets/Pasted%20image%2020250130103548.png)

The Builder pattern lets you construct complex objects step by step. The Builder doesn’t allow other objects to access the product while it’s being built.

The pattern organizes object construction into a set of steps (`buildWalls`, `buildDoor`, etc.). To create an object, you execute a series of these steps on a builder object. The important part is that you don’t need to call all of the steps. You can call only those steps that are necessary for producing a particular configuration of an object.

Some of the construction steps might require different implementation when you need to build various representations of the product. For example, walls of a cabin may be built of wood, but the castle walls must be built with stone.

In this case, you can create several different builder classes that implement the same set of building steps, but in a different manner. Then you can use these builders in the construction process (i.e., an ordered set of calls to the building steps) to produce different kinds of objects.

For example, imagine a builder that builds everything from wood and glass, a second one that builds everything with stone and iron and a third one that uses gold and diamonds. By calling the same set of steps, you get a regular house from the first builder, a small castle from the second and a palace from the third. However, this would only work if the client code that calls the building steps is able to interact with builders using a common interface.

**Director**

You can go further and extract a series of calls to the builder steps you use to construct a product into a separate class called *director*. The director class defines the order in which to execute the building steps, while the builder provides the implementation for those steps.

Having a director class in your program isn’t strictly necessary. You can always call the building steps in a specific order directly from the client code. However, the director class might be a good place to put various construction routines so you can reuse them across your program.

In addition, the director class completely hides the details of product construction from the client code. The client only needs to associate a builder with a director, launch the construction with the director, and get the result from the builder.

<!-- ExplanationEnd -->

Tags: should-know N002F005
<!--ID: 1760705194558-->

END

---

START
NI-SZZ

Jaká je struktura **Builder** design patternu?

Back:

![](../../../Assets/Pasted%20image%2020250130103723.png)

1. The **Builder** interface declares product construction steps that are common to all types of builders.
2. **Concrete Builders** provide different implementations of the construction steps. Concrete builders may produce products that don’t follow the common interface.
3. **Products** are resulting objects. Products constructed by different builders don’t have to belong to the same class hierarchy or interface.
4. The **Director** class defines the order in which to call construction steps, so you can create and reuse specific configurations of products.
5. The **Client** must associate one of the builder objects with the director. Usually, it’s done just once, via parameters of the director’s constructor. Then the director uses that builder object for all further construction. However, there’s an alternative approach for when the client passes the builder object to the production method of the director. In this case, you can use a different builder each time you produce something with the director.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250130103736.png)

<!-- ExampleEnd -->

Tags: should-know N002F006
<!--ID: 1760705194561-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Builder** design patternu? (3 + 1)

Back:

✅ You can construct objects step-by-step, defer construction steps or run steps recursively.

✅ You can reuse the same construction code when building various representations of products.

✅ *Single Responsibility Principle*. You can isolate complex construction code from the business logic of the product.

❌ The overall complexity of the code increases since the pattern requires creating multiple new classes.

Tags: should-know N002F007
<!--ID: 1760705194564-->

END

---

### Factory method

START
NI-SZZ

K čemu slouží **Factory method** design pattern?

Back:

Třídá má **factory method** a podtřídy si pak tu metodu mohou implementovat podle sebe.

![](../../../Assets/Pasted%20image%2020250130104630.png)

<!-- ExampleStart -->

Třída `Logistics` má metodu `createTransport`, co vrací objekt typu `Transport`. Tato metoda může být abstraktní nebo může implementovat nějaký defaultní chování.

Podtřída `BoatLogistics` pak může přepsat tuto metodu `createTransport` a upravit ji tak, aby vracela objekt typu `BoatTransport`.

![](../../../Assets/Pasted%20image%2020250130104000.png)
![](../../../Assets/Pasted%20image%2020250130104013.png)

<!-- ExampleEnd -->

<!-- ExplanationStart -->

**PROBLEM:**
Imagine that you’re creating a logistics management application. The first version of your app can only handle transportation by trucks, so the bulk of your code lives inside the `Truck` class.

After a while, your app becomes pretty popular. Each day you receive dozens of requests from sea transportation companies to incorporate sea logistics into the app.

![](../../../Assets/Pasted%20image%2020250130103933.png)

Great news, right? But how about the code? At present, most of your code is coupled to the `Truck` class. Adding `Ships` into the app would require making changes to the entire codebase. Moreover, if later you decide to add another type of transportation to the app, you will probably need to make all of these changes again.

As a result, you will end up with pretty nasty code, riddled with conditionals that switch the app’s behavior depending on the class of transportation objects.

**SOLUTION:**
The Factory Method pattern suggests that you replace direct object construction calls (using the `new` operator) with calls to a special *factory* method. Don’t worry: the objects are still created via the `new` operator, but it’s being called from within the factory method. Objects returned by a factory method are often referred to as *products.*
![](../../../Assets/Pasted%20image%2020250130104000.png)

At first glance, this change may look pointless: we just moved the constructor call from one part of the program to another. However, consider this: now you can override the factory method in a subclass and change the class of products being created by the method.

There’s a slight limitation though: subclasses may return different types of products only if these products have a common base class or interface. Also, the factory method in the base class should have its return type declared as this interface.
![](../../../Assets/Pasted%20image%2020250130104013.png)

For example, both `Truck` and `Ship` classes should implement the `Transport` interface, which declares a method called `deliver`. Each class implements this method differently: trucks deliver cargo by land, ships deliver cargo by sea. The factory method in the `RoadLogistics` class returns truck objects, whereas the factory method in the `SeaLogistics` class returns ships.

![](../../../Assets/Pasted%20image%2020250130104027.png)

The code that uses the factory method (often called the *client* code) doesn’t see a difference between the actual products returned by various subclasses. The client treats all the products as abstract `Transport`. The client knows that all transport objects are supposed to have the `deliver` method, but exactly how it works isn’t important to the client.

<!-- ExplanationEnd -->

Tags: should-know N002F008
<!--ID: 1760705194567-->

END

---

START
NI-SZZ

Jaká je struktura **Factory method** design patternu?

Back:

![](../../../Assets/Pasted%20image%2020250130104037.png)

1. The **Product** declares the interface, which is common to all objects that can be produced by the creator and its subclasses.
2. **Concrete Products** are different implementations of the product interface.
3. The **Creator** class declares the factory method that returns new product objects. It’s important that the return type of this method matches the product interface.
   - You can declare the factory method as `abstract` to force all subclasses to implement their own versions of the method. As an alternative, the base factory method can return some default product type.
   - Note, despite its name, product creation is **not** the primary responsibility of the creator. Usually, the creator class already has some core business logic related to products. The factory method helps to decouple this logic from the concrete product classes. Here is an analogy: a large software development company can have a training department for programmers. However, the primary function of the company as a whole is still writing code, not producing programmers.
4. **Concrete Creators** override the base factory method so it returns a different type of product.
   - Note that the factory method doesn’t have to **create** new instances all the time. It can also return existing objects from a cache, an object pool, or another source.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250130104130.png)

<!-- ExampleEnd -->

Tags: should-know N002F009
<!--ID: 1760705194570-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Factory method** design patternu? (3 + 1)

Back:

✅ You avoid tight coupling between the creator and the concrete products.

✅ *Single Responsibility Principle*. You can move the product creation code into one place in the program, making the code easier to support.

✅ *Open/Closed Principle*. You can introduce new types of products into the program without breaking existing client code.

❌ The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.

Tags: should-know N002F010
<!--ID: 1760705194573-->

END

---

### Prototype

START
NI-SZZ

K čemu slouží **Prototype** design pattern?

Back:

Umožňuje vytvářet kopie existujících objektů, aniž by byl kód závislý na jejich třídách.

![](../../../Assets/Pasted%20image%2020250130104639.png)

<!-- ExplanationStart -->

**PROBLEM:**
Say you have an object, and you want to create an exact copy of it. How would you do it? First, you have to create a new object of the same class. Then you have to go through all the fields of the original object and copy their values over to the new object.

Nice! But there’s a catch. Not all objects can be copied that way because some of the object’s fields may be private and not visible from outside of the object itself.

![](../../../Assets/Pasted%20image%2020250130104235.png)

There’s one more problem with the direct approach. Since you have to know the object’s class to create a duplicate, your code becomes dependent on that class. If the extra dependency doesn’t scare you, there’s another catch. Sometimes you only know the interface that the object follows, but not its concrete class, when, for example, a parameter in a method accepts any objects that follow some interface.

**SOLUTION:**
The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. Usually, such an interface contains just a single `clone` method.

The implementation of the `clone` method is very similar in all classes. The method creates an object of the current class and carries over all of the field values of the old object into the new one. You can even copy private fields because most programming languages let objects access private fields of other objects that belong to the same class.

An object that supports cloning is called a *prototype*. When your objects have dozens of fields and hundreds of possible configurations, cloning them might serve as an alternative to subclassing.

![](../../../Assets/Pasted%20image%2020250130104301.png)

Here’s how it works: you create a set of objects, configured in various ways. When you need an object like the one you’ve configured, you just clone a prototype instead of constructing a new object from scratch.

<!-- ExplanationEnd -->

Tags: should-know N002F011
<!--ID: 1760705194576-->

END

---

START
NI-SZZ

Jaká je **basic implementation** struktura **Prototype** design patternu?

Back:

![](../../../Assets/Pasted%20image%2020250130104419.png)

1. The **Prototype** interface declares the cloning methods. In most cases, it’s a single `clone` method.
2. The **Concrete Prototype** class implements the cloning method. In addition to copying the original object’s data to the clone, this method may also handle some edge cases of the cloning process related to cloning linked objects, untangling recursive dependencies, etc.
3. The **Client** can produce a copy of any object that follows the prototype interface.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250130104437.png)

<!-- ExampleEnd -->

Tags: should-know N002F012
<!--ID: 1760705194578-->

END

---

START
NI-SZZ

Jaká je **prototype registry** struktura **Prototype** design patternu?

Back:

![](../../../Assets/Pasted%20image%2020250130104444.png)

1. The **Prototype Registry** provides an easy way to access frequently-used prototypes. It stores a set of pre-built objects that are ready to be copied. The simplest prototype registry is a `name → prototype` hash map. However, if you need better search criteria than a simple name, you can build a much more robust version of the registry.

Tags: should-know N002F013
<!--ID: 1760705194581-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Prototype** design patternu? (4 + 1)

Back:

✅ You can clone objects without coupling to their concrete classes.

✅ You can get rid of repeated initialization code in favor of cloning pre-built prototypes.

✅ You can produce complex objects more conveniently.

✅ You get an alternative to inheritance when dealing with configuration presets for complex objects.

❌ Cloning complex objects that have circular references might be very tricky.

Tags: should-know N002F014
<!--ID: 1760705194584-->

END

---

### Singleton

START
NI-SZZ

K čemu slouží **Singleton** design pattern?

Back:

Umožňuje mít **jednu globální** instanci dané třídy.

![](../../../Assets/Pasted%20image%2020250130104553.png)

<!-- ExplanationStart -->

**PROBLEM:**
The Singleton pattern solves two problems at the same time, violating the *Single Responsibility Principle*:

**Ensure that a class has just a single instance**. Why would anyone want to control how many instances a class has? The most common reason for this is to control access to some shared resource—for example, a database or a file.

Here’s how it works: imagine that you created an object, but after a while decided to create a new one. Instead of receiving a fresh object, you’ll get the one you already created.

Note that this behavior is impossible to implement with a regular constructor since a constructor call **must** always return a new object by design.

![](../../../Assets/Pasted%20image%2020250130104704.png)
**Provide a global access point to that instance**. Remember those global variables that you (all right, me) used to store some essential objects? While they’re very handy, they’re also very unsafe since any code can potentially overwrite the contents of those variables and crash the app.

Just like a global variable, the Singleton pattern lets you access some object from anywhere in the program. However, it also protects that instance from being overwritten by other code.

There’s another side to this problem: you don’t want the code that solves problem #1 to be scattered all over your program. It’s much better to have it within one class, especially if the rest of your code already depends on it.

Nowadays, the Singleton pattern has become so popular that people may call something a *singleton* even if it solves just one of the listed problems.

**SOLUTION:**
All implementations of the Singleton have these two steps in common:

- Make the default constructor private, to prevent other objects from using the `new` operator with the Singleton class.
- Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.

If your code has access to the Singleton class, then it’s able to call the Singleton’s static method. So whenever that method is called, the same object is always returned.

<!-- ExplanationEnd -->

Tags: should-know N002F015
<!--ID: 1760705194586-->

END

---

START
NI-SZZ

Jaká je struktura **Singleton** design patternu?

Back:

![](../../../Assets/Pasted%20image%2020250130104742.png)

1. The **Singleton** class declares the static method `getInstance` that returns the same instance of its own class.

The Singleton’s constructor should be hidden from the client code. Calling the `getInstance` method should be the only way of getting the Singleton object.

Tags: should-know N002F016
<!--ID: 1760705194589-->

END

---

START
NI-SZZ

Jaké jsou výhody a nevýhody **Singleton** design patternu? (3 + 4)

Back:

✅ You can be sure that a class has only a single instance.

✅ You gain a global access point to that instance.

✅ The singleton object is initialized only when it’s requested for the first time.

❌ Violates the *Single Responsibility Principle*. The pattern solves two problems at the time.

❌ The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.

❌ The pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times.

❌ It may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don’t write the tests. Or don’t use the Singleton pattern.

Tags: should-know N002F017
<!--ID: 1760705194592-->

END

---

### Non-GoF vzory

START
NI-SZZ

Jaké jsou **Non-GoF návrhové vzory**? (8)

Back:

- **Dependency injection**
- **Double-checked locking**
- **Lazy loading**
- **Marker interface**
- **Mock object**
- **Multiton**
- **Null object**
- **Thread pool**

Tags: should-know N002F018
<!--ID: 1760705194594-->

END

---

#### Double-checked locking

START
NI-SZZ

Jak funguje **Double-checked locking**?

Back:

Cílem je **snížit počet volání locku** (např. mutexu) tak, že zkontroluju danou podmínku ještě před zavoláním mutexu.

Příklad u singletonu:

```
if(ins == null) {
	mutex_lock()
	if(ins == null) {
		ins = new Ins()
	}
	mutex_unlock()
}
```

Tags: should-know N002F019
<!--ID: 1760705194597-->

END

---

START
NI-SZZ

Proč by člověk měl používat **Double-checked locking**?

Back:

- **Performance boost**: Kdyby člověk používal jen `lock + check`, tak by to bylo pomalé, protože by člověk musel vždy locknout.
- (Kdyby člověk nelockoval vůbec, tak by si to vlákna přepisovala)

Proto je fajn to nejdřív checknout, potom locknout a potom checknout znovu.

Tags: should-know N002F020
<!--ID: 1760705194599-->

END

---

#### Thread pool

START
NI-SZZ

Jak funguje **Thread pool** a proč je dobré ho používat?

Back:

1. Máme např. databázi a máme k dispozici thread pool o 10 vláknech.
2. Dále máme nějakou **task queue**, která čeká na volná vlákna.
3. Jakmile se nějaké vlákno uvolní, je přiřazeno nějakému tasku z task queue.
4. Jakmile se task dokončí, je vlákno uvolněno a je k dispozici dalším taskům.

**Proč je vhodný:**

- **Performance boost**: Nemusím furt vytvářet a ničit vlákna, jen je přiřazuju jiným taskům.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250130113831.png)

<!-- ImageEnd -->

Tags: should-know N002F021
<!--ID: 1760705194602-->

END

---

#### Mock object

START
NI-SZZ

Jak funguje **Mock object**?

Back:

Objekt, který je náhradou za nějaký reálný objekt, simuluje jeho chování. Typicky se používá pro testování.

![](../../../Assets/Pasted%20image%2020250130113938.png)

Tags: should-know N002F022
<!--ID: 1760705194605-->

END

---

START
NI-SZZ

Proč by člověk měl používat **Mock object**?

Back:

- **Šetří čas při testování** - nemusíme například vytvářet databázi, stačí si udělat mock object
- **Usnadňuje testování** - některé situace jsou velice těžké na testování (network connection atd.)
- **Když neexistuje implementace** - můžeme mocknout něco, co ještě neexistuje. Díky tomu můžeme vyvíjet bez dané části systému
- **Když reálný objekt vrací nedeterministické výsledky** - např. čas, seed atd.

Tags: should-know N002F023
<!--ID: 1760705194608-->

END

---

#### Null object

START
NI-SZZ

Jak funguje **Null object** a proč je dobré ho používat? (2)

Back:

Máme objekt, který nic nedělá a reprezentuje `null` hodnotu.
Typicky je Singleton.

Díky tomu:

- Nemusím používat `null` (což je považováno za bad practice)
- Umožňuje mi to např. jednoduššeji udělat ukončující podmínku když iteruju přes struktury.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250130114134.png)

<!-- ImageEnd -->

Tags: should-know N002F024
<!--ID: 1760705194611-->

END

---
