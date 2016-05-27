from __future__ import print_function
from twisted.internet.defer import inlineCallbacks
from autobahn.twisted.util import sleep
from autobahn.twisted.wamp import ApplicationSession, ApplicationRunner
import os


class Component(ApplicationSession):
    """
    An application component that publishes ever second
    """

    @inlineCallbacks
    def onJoin(self, details):
        print("session attached")
        dir = 1
        pos_y = 0
        while True:
            pos_y += (0.01 * dir)
            if abs(pos_y) > 1:
                dir *= -1
                pos_y += (0.2 * dir) 
            print('backend publishing com.bitstorm.pub', pos_y)
            self.publish(u'com.bitstorm.pub', pos_y)
            yield sleep(.1)


if __name__ == '__main__':
    # Crossbar.io connection configuration
    url = os.environ.get('CBURL', u'ws://localhost:8080/ws')
    realm = os.environ.get('CBREALM', u'realm1')
    
    print('url {}\trealm {}'.format(url,realm))

    runner = ApplicationRunner(u"ws://192.168.99.100:8080/ws", u"realm1")
    runner.run(Component)
