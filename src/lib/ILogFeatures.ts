/**
 * This interface describes the possible configuration parameters that can be passed to the
 * {{#crossLink "temple.utils.log.Log"}}Log{{/crossLink}} constructor
 *
 * @namespace temple.utils.log
 * @class ILogFeatures
 * @contributors Stuart van Beek
 * @constructor
 * @param {string} ns
 * @param {ILogFeatures} [features]
 */
interface ILogFeatures
{
	/**
	 * Enable to show a timestamp when logging
	 *
	 * @default false
	 * @property {boolean} time
	 */
	time?:boolean;

	/**
	 * Enable to show a datestamp when logging.
	 *
	 * @default false
	 * @property {boolean} date
	 */
	date?:boolean;

	/**
	 * Enable to show the amount of time elapsed since the last log call of the instance of
	 * {{#crossLink "temple.utils.log.Log"}}Log{{/crossLink}}
	 *
	 * @default false
	 * @property {boolean} timeDiff
	 */
	timeDiff?:boolean;

	/**
	 * Set to `false` to disable logging of the namespace string
	 *
	 * @default true
	 * @property {boolean} showNamespaceString
	 */
	showNamespaceString?:boolean;

	/**
	 * Sets the color of the prefixed logging string (e.g. the namespace, timestamp, etc)
	 *
	 * @default #8c8c8c
	 * @property {string} color
	 */
	color?:string;
}

export default ILogFeatures;
