 function addDigit(input, character) {
            if ((input.value == 0) || (input.value == null)) {
                input.value = character;
            }
            else {
                input.value += character;
            }
        }

        function doExponent(form) {
            form.user.value = Math.exp(form.user.value);
        }

        function inpDel(input) {
            input.value = input.value.substring(0, input.value.length - 1);
        }

        function compute(form) {
            form.user.value = eval(form.user.value)
        }

        function PlusMinus(input) {
            if (input.value.substring(0, 1) == "-") {
                input.value = input.value.substring(1, input.value.length);
            }
            else {
                input.value = "-" + input.value;
            }
        }

        function doSin(contianer) {
            form.user.value = Math.sin(form.user.value);
        }

        function doCos(form) {
            form.user.value = Math.cos(form.user.value);
        }

        function doTan(form) {
            form.user.value = Math.tan(form.user.value);
        }

        function doLn(form) {
            form.user.value = Math.log(form.user.value);
        }

        function doSqrt(form) {
            form.user.value = Math.sqrt(form.user.value);
        }

        function checkNum(str) {
            for (var i = 0; i < str.length; i++) {
                var ch = str.substring(i, i + 1)
                if (ch < "0" || ch > "9") {
                    if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
                        && ch != "(" && ch != ")") {
                        alert("invalid entry!")
                        return false
                    }
                }
            }
            return true
        }

        function doSq(form) {
            form.user.value = eval(form.user.value) * eval(form.user.value);
        }

        function doCube(form) {
            form.user.value = eval(form.user.value) * eval(form.user.value) * eval(form.user.value);
        }
