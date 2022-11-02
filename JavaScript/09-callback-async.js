
setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E')

// 1 - A B C D E
// 2 - B E A D C
// 3 - E B A D C

// pile d'appels
// ^
// |
// |                                                             [log]               [log]      [log]                  [log]
// |[setTimeout][setTimeout][setTimeout][setTimeout][log] ⟳      [callbackB] ⟳       [callbackA][callbackD] ⟳          [callbackC] ⟳
// +------------0------------------------------------------------7ms------------------500ms------501ms-----------------1000ms--> temps
//                                                  E            B                    A          D                      C
// file d'attente timer 0ms : callbackB
// file d'attente timer 7ms :
// file d'attente timer 500ms : callbackD
// file d'attente timer 501ms :

// Jake Archibald - In the loop
//
