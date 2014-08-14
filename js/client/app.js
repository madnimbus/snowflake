var SnowflakeClient = {};
SnowflakeClient.developmentVersion = "SNOWFLAKE_DEVELOPMENT";
SnowflakeClient.releaseVersion = "SNOWFLAKE_RELEASE";

SnowflakeClient.version = "SNOWFLAKE_DEVELOPMENT";

SnowflakeClient.consoleLogInDevVersion = function consoleLogInDevVersion(message) {
	if(SnowflakeClient.version === SnowflakeClient.developmentVersion) {
		console.log(message);
	}
};