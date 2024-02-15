// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class OwnerUpdated extends ethereum.Event {
  get params(): OwnerUpdated__Params {
    return new OwnerUpdated__Params(this);
  }
}

export class OwnerUpdated__Params {
  _event: OwnerUpdated;

  constructor(event: OwnerUpdated) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Posted extends ethereum.Event {
  get params(): Posted__Params {
    return new Posted__Params(this);
  }
}

export class Posted__Params {
  _event: Posted;

  constructor(event: Posted) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _ipfs(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class Wiki extends ethereum.SmartContract {
  static bind(address: Address): Wiki {
    return new Wiki("Wiki", address);
  }

  DOMAIN_SEPARATOR(): Bytes {
    let result = super.call(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      [],
    );

    return result[0].toBytes();
  }

  try_DOMAIN_SEPARATOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DOMAIN_SEPARATOR",
      "DOMAIN_SEPARATOR():(bytes32)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _validator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class PostCall extends ethereum.Call {
  get inputs(): PostCall__Inputs {
    return new PostCall__Inputs(this);
  }

  get outputs(): PostCall__Outputs {
    return new PostCall__Outputs(this);
  }
}

export class PostCall__Inputs {
  _call: PostCall;

  constructor(call: PostCall) {
    this._call = call;
  }

  get ipfs(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class PostCall__Outputs {
  _call: PostCall;

  constructor(call: PostCall) {
    this._call = call;
  }
}

export class PostBySigCall extends ethereum.Call {
  get inputs(): PostBySigCall__Inputs {
    return new PostBySigCall__Inputs(this);
  }

  get outputs(): PostBySigCall__Outputs {
    return new PostBySigCall__Outputs(this);
  }
}

export class PostBySigCall__Inputs {
  _call: PostBySigCall;

  constructor(call: PostBySigCall) {
    this._call = call;
  }

  get ipfs(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _user(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _deadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get _r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get _s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class PostBySigCall__Outputs {
  _call: PostBySigCall;

  constructor(call: PostBySigCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}

export class SetValidatorCall extends ethereum.Call {
  get inputs(): SetValidatorCall__Inputs {
    return new SetValidatorCall__Inputs(this);
  }

  get outputs(): SetValidatorCall__Outputs {
    return new SetValidatorCall__Outputs(this);
  }
}

export class SetValidatorCall__Inputs {
  _call: SetValidatorCall;

  constructor(call: SetValidatorCall) {
    this._call = call;
  }

  get _validator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetValidatorCall__Outputs {
  _call: SetValidatorCall;

  constructor(call: SetValidatorCall) {
    this._call = call;
  }
}
