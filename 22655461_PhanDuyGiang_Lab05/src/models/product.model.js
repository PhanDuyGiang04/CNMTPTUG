const dynamoDB = require("../config/dynamodb");
const TABLE_NAME = process.env.TABLE_NAME;

exports.getAll = async () => {
    const params = { TableName: TABLE_NAME };
    const data = await dynamoDB.scan(params).promise();
    return data.Items;
};
