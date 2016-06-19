import CheddarScope from '../env/scope';
import CheddarShuntingYard from '../../../tokenizer/tok/shunting_yard';

export default class CheddarCallStack {
    constructor(exec_instruct, scope = new CheddarScope()) {
        this.InStack = new CheddarShuntingYard().exec(
            exec_instruct._Tokens[0]
        )._Tokens;

        this.CallStack = [];
        this.Scope = scope;

        this._csi = 0; // Call-stack Index
    }

    get stack() { return this.CallStack }

    put(n) {
        return this.CallStack.unshift(n);
    }

    shift() {
        return this.CallStack.shift();
    }

    next() {
        return this.InStack[this._csi++];
    }

    close() {
        return this.CallStack[this.CallStack.length - 1];
    }
}