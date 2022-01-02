const detailOrderRoomModel = require("../../models/order/detailOrderRoom.model");
const detailOrderServiceService = require('./detailOrderService.service')

const DetailOrderRoomService = {
    async findAll() {
        const detailOrders = await detailOrderRoomModel.find({});


        const newDetailOrders = detailOrders.map(detail => {
            const newDetailOrder = this.findById(detail._id)
            return newDetailOrder
        })
        return newDetailOrders;
    },

    async findById(id) {

        const detailOrder = await detailOrderRoomModel.findById(id).lean();
        detailOrderServices = []
        for (const id of detailOrder.detailOrderService) {
            const service = await detailOrderServiceService.findById(id)
            detailOrderServices.push(service)
        }
        detailOrder.detailOrderService = detailOrderServices
        return detailOrder
    },

    async findByRoomId(roomId) {
        return await detailOrderRoomModel.find({ roomID: roomId }).lean();
    },

    async findByDateInOut(datein, dateout) {
        console.log(dateout);
        console.log(dateout <= new Date("2022-01-15"));
        return await detailOrderRoomModel.find({
            dateOfCheckIn: { $lte: datein },
            dateOfCheckOut: { $gte: dateout },
        });
    },


}

module.exports = DetailOrderRoomService