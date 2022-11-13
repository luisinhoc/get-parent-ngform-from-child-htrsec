import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'hello',
  template: `
  >>>>>>{{_value}}<<<<
    <pre>
      This component is getting the parent form injected so that 
      it can check state, hook into lifecycle etc.

      Look in the console log for the details of the parent form.

    </pre>
    UPDATE: Finally found solution here: <br/><a href="https://blog.profanis.me/blog/reactive-forms-in-parent-child-components">  https://blog.profanis.me/blog/reactive-forms-in-parent-child-components</a>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements ControlValueAccessor {
  // @Output() change = new EventEmitter();
  onChange: any = () => {}
  onTouch: any = () => {}

  _value: string; // this is the updated value that the class accesses
  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
  set value(value: any){  
    this._value = value;
    this.onChange(value);
    this.onTouch(value);
  }

  // this method sets the value programmatically
  writeValue(value: any){ 
    this.value = value
  }

  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any){
    this.onChange = fn
  }

  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any){
    this.onTouch = fn
  }
  // // form: FormGroup;
  // // parentFormGroup = { control: undefined };
  // // constructor(public parentFormGroup: FormGroupDirective) {}
  // // constructor(public form: FormGroupDirective) {}

  // get value(): any {
  //     return this._value;
  // }

  // writeValue(value: any): void {
  //   if (this._value !== value){
  //     this._value = value;
  //     this.onChange(this._value);
  //     this.change.emit(this._value);
  //   }
  // }

  // onChange: any = (): void => {};

  // registerOnChange(fn): void { this.onChange = fn; }

  // protected onTouched: any = () => {};
  // registerOnTouched(fn: any): void {
  //   console.log("on blur");
  //   this.onTouched = fn;
  // }
  // setDisabledState?(isDisabled: boolean): void {
  //   // Not needed for this
  // }

  ngOnInit() {
    // this.form = this.parentFormGroup?.control;
    // console.log(this.parentFormGroup);
    // console.log(this.form.control);
    // console.log(this.form?.get('name'));
  }
}
