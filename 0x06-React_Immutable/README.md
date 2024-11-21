In object-oriented (OO) and functional programming, an immutable object (unchangeable[1] object) is an object whose state cannot be modified after it is created.[2] This is in contrast to a mutable object (changeable object), which can be modified after it is created.[3] In some cases, an object is considered immutable even if some internally used attributes change, but the object's state appears unchanging from an external point of view. For example, an object that uses memoization to cache the results of expensive computations could still be considered an immutable object.

Strings and other concrete objects are typically expressed as immutable objects to improve readability and runtime efficiency in OO programming. Immutable objects are also useful because they are inherently thread-safe.[2] Other benefits are that they are simpler to understand and reason about and offer higher security than mutable objects.[2]

Concepts
Immutable variables
In imperative programming, values held in program variables whose content never changes are known as constants to differentiate them from variables that could be altered during execution. Examples include conversion factors from meters to feet, or the value of pi to several decimal places.

Read-only fields may be calculated when the program runs (unlike constants, which are known beforehand), but never change after they are initialized.

Weak vs strong immutability
Sometimes, one talks of certain fields of an object being immutable. This means that there is no way to change those parts of the object state, even though other parts of the object may be changeable (weakly immutable). If all fields are immutable, then the object is immutable. If the whole object cannot be extended by another class, the object is called strongly immutable.[4] This might, for example, help to explicitly enforce certain invariants about certain data in the object staying the same through the lifetime of the object. In some languages, this is done with a keyword (e.g. const in C++, final in Java) that designates the field as immutable. Some languages reverse it: in OCaml, fields of an object or record are by default immutable, and must be explicitly marked with mutable to be so.

