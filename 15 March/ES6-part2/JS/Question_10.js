class Stack {
    constructor()
    {
        this.items = [];
    }

    push(element)
    {
        this.items.push(element);
    }

    pop()
    {
        if (this.items.length == 0)
            return "Underflow";
        else
            return this.items.pop();
    }

    peek()
    {
        return this.items[this.items.length - 1];
    }

    printStack()
    {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}


var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

var x=document.getElementById('output');
x.innerHTML="<li> Elements of stack are : "+stack.printStack()+"</li>";
x.innerHTML+="<li> Last element of stack : "+stack.peek()+"</li>";
x.innerHTML+="<li> Element removed : "+stack.pop()+"</li>";
x.innerHTML+="<li> Elements of stack after pop() operation  : "+stack.printStack()+"</li>";
