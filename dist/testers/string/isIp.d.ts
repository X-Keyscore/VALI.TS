interface IsIpParams {
    /** **Default:** `true` */
    allowIpV4?: boolean;
    /** **Default:** `true` */
    allowIpV6?: boolean;
    /**
     * **Classless Inter-Domain Routing**
     *
     * **Possible value :** `D` = Deny | `A` = Allow  | `R` = Require
     *
     * **Default :** `D`
     */
    CIDR?: "D" | "A" | "R";
}
/**
 * @param input Can be either a `string` or a `Uint16Array` containing the decimal values ​​of the string in code point Unicode format.
 *
 * **Implementation version :** 1.1.0-beta
 *
 * ==============================
 *
 * **IPv4**
 *
 * **Standard:** No standard
 *
 * **Checked composition :**
 * * `DIGIT = %x30-39` 0-9.
 * * `dec-octet = 1*3DIGIT` Representing a decimal integer value in the range 0 through 255.
 * * `prefix = 1*2DIGIT` Representing a decimal integer value in the range 0 through 32.
 * * `IPv4 = dec-octet 3("." dec-octet) ["/" prefix]`
 *
 * **Implementation version :** 1.0.0
 *
 * ==============================
 *
 * **IPv6**
 *
 * **Standard :** No standard
 *
 * **Checked composition :**
 * * `DIGIT = %x30-39` 0-9.
 * * `HEXDIG = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"`
 * * `IPv6-full = 1*4HEXDIG 7(":" 1*4HEXDIG)`
 * * `IPv6-comp = [1*4HEXDIG *5(":" 1*4HEXDIG)] "::" [1*4HEXDIG *5(":" 1*4HEXDIG)]`
 * * `IPv6v4-full = 1*4HEXDIG 5(":" 1*4HEXDIG) ":" IPv4`
 * * `IPv6v4-comp = [1*4HEXDIG *3(":" 1*4HEXDIG)] "::" [1*4HEXDIG *3(":" 1*4HEXDIG) ":"] IPv4`
 * * `prefix = 1*3DIGIT` Representing a decimal integer value in the range 0 through 128.
 * * `IPv6 = (IPv6-full / IPv6-comp / IPv6v4-full / IPv6v4-comp) ["/" prefix]`
 */
export declare function isIp(input: string | Uint16Array, params?: IsIpParams): boolean;
export {};
