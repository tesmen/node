console.log(1)

//
// <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>
//
// $rootScope.getChatsDataCallback = function (data) {
//     $rootScope.chatsData = data.data;
//     console.log($rootScope.chatsData);
//
//     $rootScope.drawChatGauge(parseInt($rootScope.chatsData.speed.percent_sl_month));
// };
//
//
// $rootScope.initChatSocketConnection = function () {
//     $rootScope.chatSocket = io('https://chat.iqoption.com/');
//     $rootScope.drawChatGauge(0); // loading mock
//
//     $rootScope.chatSocket.on('connect', function () {
//         $rootScope.chatSocket.on('support.getDashboard', $rootScope.getChatsDataCallback);
//         $rootScope.getChatsData();
//     })
// };
//
// $rootScope.getChatsData = function () {
//     if (!$rootScope.chatSocket || $rootScope.chatSocket.disconnected) {
//         $rootScope.chatsData = {}; // reset chats data to display error
//         return;
//     }
//
//     $rootScope.chatSocket.emit('support.getDashboard');
// };