function Node(value, nextNode) {
  value = value;
  nextNode = nextNode;
  return { value, nextNode };
}

class LinkdedList {
  constructor() {
    this.init = Node(null, null);
  }

  append(value) {
    if (!this.init.value) {
      this.init = Node(value, null);
    } else {
      let pos = this.init;
      while (pos.nextNode) {
        pos = pos.nextNode;
      }
      pos.nextNode = Node(value, null);
    }
  }
  prepend(value) {
    if (!this.init.value) {
      this.init = Node(value, null);
    } else {
      let newNode = Node(value, null);
      let existingNodes = this.init;
      this.init = newNode;
      this.init.nextNode = existingNodes;
    }
  }
  size() {
    let count = 0;
    let node = this.init;
    if (node.value) {
      count = +1;
    }
    while (node.nextNode) {
      node = node.nextNode;
      count++;
    }
    return count;
  }
  head() {
    return this.init;
  }
  tail() {
    if (this.init.value) {
      let node = this.init;
      while (node.nextNode) {
        node = node.nextNode;
      }
      return node;
    }
    return this.init;
  }
  at(idx) {
    let count = 0;
    let node = this.init;
    while (node.nextNode) {
      if (idx === count) {
        return node;
      }
      count++;
      node = node.nextNode;
    }
    return null;
  }
  pop() {
    if (this.init.value) {
      let current = this.init;
      let prev;

      while (current.nextNode) {
        prev = current;
        current = current.nextNode;
      }
      if (!prev) {
        this.init = Node(null, null);
        return current.value;
      }
      prev.nextNode = null;

      return current.value;
    }
    return "nothing to pop";
  }
  contains(value) {
    let node = this.init;

    while (node) {
      if (value === node.value) {
        return true;
      }
      node = node.nextNode;
    }
    return false;
  }
  find(value) {
    if (this.contains(value)) {
      let node = this.init;
      let count = 0;
      while (node) {
        if (node.value === value) {
          return count;
        }
        node = node.nextNode;
        count++;
      }
    }
    return null;
  }

  toString() {
    let myString = "";

    let node = this.init;
    while (node) {
      myString += `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    myString += `${null}`;

    return myString;
  }

  insertAt(idx, value) {
    // if idx out of range append at end
    if (this.size() < idx) {
      this.append(value);
      return value;
    } else {
      let count = 0;
      let prev;
      let current = this.init;
      let newNode = Node(value, null);

      while (current) {
        if (count === idx) {
          prev = prev.nextNode = newNode;
          prev.nextNode = current;
          return prev.value;
        }
        prev = current;
        current = current.nextNode;
        count++;
      }
    }
  }

  removeAt(idx) {
    let count = 0;
    let prev;
    let current = this.init;

    while (current) {
      if (idx === count) {
        prev.nextNode = current.nextNode;
        return current;
      }
      prev = current;
      current = current.nextNode;
      count++;
    }
    return null;
  }
}

let p = new LinkdedList();

p.append(6);
p.append(5);
p.append(8);
p.append(5);

// console.log(p.contains(10));
// console.log(p.find(6));

// p.insertAt(20, 9);
console.log(p.insertAt(1, 4));
console.log(p.insertAt(4, 12));
console.log(p.removeAt(8));

console.log(p.toString());
